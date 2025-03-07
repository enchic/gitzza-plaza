<script setup>
    /*
    import { Previewer } from 'pagedjs';
    import { onMounted } from 'vue';

    onMounted(() => {
        startPreview();
    });

    const startPreview = () => {
        const previewer = new Previewer();
        previewer.preview().then((flow) => {
            console.log('Rendered', flow.total, 'pages.');
        });
    };
    */
    import { onMounted } from 'vue';
    import mermaid from 'mermaid';

    onMounted(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    });
</script>

<style type="text/css">
    .commit-label-bkg,
    .commit-label { /* transform: none !important; */ }
</style>

# Story flow

## Graph

```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'Main', 'rotateCommitLabel': false } }}%%
gitGraph TB:
    commit id: "Alpha"
    commit id: "Beta"
    branch "Branch 1"
    commit id: "Gamma Gamma Gamma Gamma"
    commit
    checkout Main
    commit
    commit id: "to-pick"
    checkout "Branch 1"
    commit
    commit
    checkout Main
    commit
    merge "Branch 1"
    commit
    branch "Branch 2"
    commit
    commit
    checkout "Branch 1"
    merge "Branch 2"
    commit
    checkout Main
    merge "Branch 1"
    commit
```

## Code

```mmd
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'Main', 'rotateCommitLabel': false } }}%%
gitGraph TB:
    commit id: "Alpha"
    commit id: "Beta"
    branch "Branch 1"
    commit id: "Gamma Gamma Gamma Gamma"
    commit
    checkout Main
    commit
    commit id: "to-pick"
    checkout "Branch 1"
    commit
    commit
    checkout Main
    commit
    merge "Branch 1"
    commit
    branch "Branch 2"
    commit
    commit
    checkout "Branch 1"
    merge "Branch 2"
    commit
    checkout Main
    merge "Branch 1"
    commit
```

<!--
```mmd
gitGraph LR:
    commit
    commit
    branch feature
    commit
    commit
    checkout main
    commit
    commit id: "to-pick"
    checkout feature
    commit
    cherry-pick id: "to-pick"
    commit
    checkout main
    commit
    merge feature
    commit
    commit
```

```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```

```mermaid
flowchart LR
  Start --\> Stop
```

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

```mermaid
graph LR;
    K([...........<img src='https://emersonbottero.github.io/vitepress-plugin-mermaid/K.png' width='60' >...........])-.->G((...........<img id='git' src='https://emersonbottero.github.io/vitepress-plugin-mermaid/Octocat.png' width='50' >...........));
    H([...........<img id='helm' src='https://emersonbottero.github.io/vitepress-plugin-mermaid/helm.png' width='60' >...........])-.->G
    G--\>A;
    A(...........<img src='https://emersonbottero.github.io/vitepress-plugin-mermaid/argo-cd.png' width='60' >...........)--\>D(...........<img src='https://emersonbottero.github.io/vitepress-plugin-mermaid/ocp.png' width='60' >...........);
classDef img fill:none,color:transparent,stroke:none,borderRadius:50px
class G,D,A,K,H,B img
click K "https://kustomize.io/" _blank
click G "http://www.github.com" "This is a link" _blank
``` -->
