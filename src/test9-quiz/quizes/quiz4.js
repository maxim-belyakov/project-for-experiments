export default function App(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
}