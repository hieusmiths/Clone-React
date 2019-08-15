

export const diffDays = (from, to = new Date()) => {
    const fromDay = new Date(from)
    const toDay = new Date(to)
    const diffTime = Math.abs(fromDay.getTime() - toDay.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays;
}
// new datailpage