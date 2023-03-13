export function formatNum(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function calcDifficulty(value: string, caseSensitive: boolean) {
    const ret = Math.pow(16, value.length);

    if (caseSensitive) {
        return ret * Math.pow(2, value.replace(/\d/gi, '').length);
    }

    return ret;
}

export function calcProbability50(difficulty: number) {
    return Math.floor(Math.log(0.5) / Math.log(1 - 1 / difficulty));
}

export function calcSpeed(generated: number, firstTick: number) {
    return Math.floor((1000 * generated) / (performance.now() - firstTick));
}

export function calcProbability(difficulty: number, attempts: number) {
    return 1 - Math.pow(1 - 1 / difficulty, attempts);
}

export function calcProbabilityPercentage(difficulty: number, attempts: number) {
    return Math.round(10000 * calcProbability(difficulty, attempts)) / 100;
}
