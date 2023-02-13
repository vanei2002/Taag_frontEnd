


interface Column {
    id: 'product' | 'model' | 'marca' | 'nserie' | 'heritage' | 'invoice' | 'nota' | 'order' | 'status';
    label: string;
    minWidth?: number;
    align?: 'center' | 'right' | 'left';
}

export const columnsProduct: readonly Column[] = [
    { id: 'product', label: 'Produto', minWidth: 100, align: 'center'},
    { id: 'model', label: 'Modelo', minWidth: 100, align: 'center'},
    { id: 'marca', label: 'Marca', minWidth: 100, align: 'center'},
    { id: 'nserie', label: 'N de Serie', minWidth: 100, align: 'center',},
    { id: 'heritage', label: 'Patrimonio', minWidth: 100, align: 'center',},
    { id: 'invoice', label: 'N Fiscal', minWidth: 100, align: 'center',},
    { id: 'nota', label: 'Nota', minWidth: 100, align: 'center',},
    { id: 'order', label: 'N Pedido', minWidth: 100, align: 'center',},
    { id: 'status', label: 'Status', minWidth: 100, align: 'center', }
];


export const statusProduct = [
    {id: 1, status: 'Em estoque'},
    {id: 2, status: 'Em uso'},
    {id: 3, status: 'Em manutenção'},
    {id: 4, status: 'Em reparo'},
    {id: 5, status: 'Em conserto'},
    {id: 6, status: 'Em garantia'},
    {id: 7, status: 'Em devolução'},
    {id: 8, status: 'Em troca'},
    {id: 9, status: 'Em venda'},
    {id: 10, status: 'Em doação'},
    {id: 11, status: 'Em descarte'},
    {id: 12, status: 'Em perda'},
    {id: 13, status: 'Em desuso'},
    {id: 14, status: 'Em desativação'},        
]