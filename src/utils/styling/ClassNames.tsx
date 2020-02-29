type classVsShouldUse = { className: string; toUse: boolean }[]

export function classnames(
    defaultClassName: string,
    otherClassNames: classVsShouldUse
): string {
    const otherClassNamesString: string = otherClassNames
        .filter(it => it.toUse)
        .map(it => it.className)
        .join(' ').trim()
    return defaultClassName + ' ' + otherClassNamesString
}
