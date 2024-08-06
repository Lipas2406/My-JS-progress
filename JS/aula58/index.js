function recursiva (max) {
    console.log(max);
    if (max >= 11272) return;
    max++;
    recursiva(max);
}

recursiva(-10);

// ponto a se considerar -> Limite do motor do JavaScript: 11272 recursividades