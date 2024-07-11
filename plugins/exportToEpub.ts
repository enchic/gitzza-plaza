import { Plugin } from 'vite';
import { exec } from 'child_process';
import { resolve, dirname } from 'path';
import { promises as fs } from 'fs';
import { promisify } from 'util';
import globModule from 'glob';

const execPromise = promisify(exec);
const globPromise = promisify(globModule);

const ExportToEpubPlugin: Plugin = {
    name: 'vitepress-export-to-epub',
    apply: 'build',
    async closeBundle() {
        try {
            const outputPath = resolve(__dirname, '../dist');
            const markdownFilesPattern = '../sample-docs/**/*.md';
            /* console.log(`Building ePub from markdown files in: ${markdownFilesPattern}`);

            const markdownFiles = await globPromise(markdownFilesPattern, { cwd: __dirname }) as string[];
            console.log(`Found markdown files: ${markdownFiles}`);

            // Convert all markdown files to HTML
            for (const file of markdownFiles) {
                const htmlFile = resolve(outputPath, file.replace(/\.md$/, '.html'));
                console.log(`Converting ${file} to ${htmlFile}`);
                await execPromise(`pandoc ${resolve(__dirname, '../sample-docs', file)} -o ${htmlFile}`);
            } */

            // Collect all HTML files, CSS, JS, and images
            const htmlFiles = await globPromise('**/*.html', { cwd: outputPath }) as string[];
            const cssFiles = await globPromise('**/*.css', { cwd: outputPath }) as string[];
            const jsFiles = await globPromise('**/*.js', { cwd: outputPath }) as string[];
            const imageFiles = await globPromise('**/*.{png,jpg,jpeg,gif,svg}', { cwd: outputPath }) as string[];

            console.log(`Found HTML files: ${htmlFiles}`);
            console.log(`Found CSS files: ${cssFiles}`);
            console.log(`Found JS files: ${jsFiles}`);
            console.log(`Found image files: ${imageFiles}`);

            const epubTempDir = resolve(outputPath, 'epub');
            try {
                await fs.mkdir(epubTempDir, { recursive: true });
                console.log(`Created temp directory: ${epubTempDir}`);
            } catch (err) {
                console.error(`Error creating temp directory: ${err.message}`);
                throw err;
            }

            // Copy all assets to a temporary directory for ePub packaging
            for (const file of [...htmlFiles, ...cssFiles, ...jsFiles, ...imageFiles]) {
                const dest = resolve(epubTempDir, file);
                const destDir = dirname(dest);
                try {
                    await fs.mkdir(destDir, { recursive: true });
                } catch (err) {
                    console.error(`Error creating directory: ${err.message}`);
                    throw err;
                }

                try {
                    await fs.copyFile(resolve(outputPath, file), dest);
                    console.log(`Copied ${file} to ${dest}`);
                } catch (err) {
                    console.error(`Error copying file ${file} to ${dest}: ${err.message}`);
                    throw err;
                }
            }

            // Create ePub using Pandoc
            const command = `pandoc ${resolve(epubTempDir, '*.html')} -o ${outputPath}/sample-docs.epub --log=${outputPath}/log.txt`;
            console.log(`Executing command: ${command}`);
            try {
                await execPromise(command);
                console.log(`ePub created at ${outputPath}/sample-docs.epub`);
            } catch (error) {
                console.error(`Error creating ePub: ${error.stderr}`);
                throw error;
            }
        } catch (err) {
            console.error(`Error in ExportToEpubPlugin: ${err.message}`);
        }
    }
};

export default ExportToEpubPlugin;