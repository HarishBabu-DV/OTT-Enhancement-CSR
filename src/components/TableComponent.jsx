
const Table=({className,children,...props})=>(
    <table className={`${className}`} {...props}>
        {children}
    </table>
)
const TableHeader=({className,children,...props})=>(
    <thead className={`${className}`} {...props}>
        {children}
    </thead>
)
const TableHeaderCell=({className,children,...props})=>(
    <th className={`${className}`} {...props}>
        {children}
    </th>
)
const TableBody=({className,children,...props})=>(
    <tbody className={`${className}`} {...props}>
        {children}
    </tbody>
)
const TableRow=({className,children,...props})=>(
    <tr className={`${className}`} {...props}>
        {children}
    </tr>
)
const TableDataCell=({className,children,...props})=>(
    <td className={`${className}`} {...props}>
        {children}
    </td>
)
export {
    Table,TableHeader,TableHeaderCell,TableBody,TableRow,TableDataCell
}