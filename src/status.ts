
// Table Product taag frontEnd
interface ColumnProduct {
    id: 'product' | 'model' | 'marca' | 'nserie' | 'heritage' | 'invoice' | 'nota' | 'order' | 'status';
    label: string;
    minWidth?: number;
    align?: 'center' | 'right' | 'left';
}

export const columnsProduct: readonly ColumnProduct [] = [
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

// Table Clients taag frontEnd
interface ColumnClient {
    id: 'name' | 'email' | 'phone' | 'address' | 'cep' | 'state' | 'city' | 'department' | 'description' | 'responsible' | 'work';
    label: string;
    minWidth?: number;
    align?: 'center' | 'right' | 'left';
}

 export const columnsClients: readonly ColumnClient[] = [
    { id: 'name', label: 'Cliente', minWidth: 180, align: 'center'},
    { id: 'email', label: 'Email', minWidth: 180, align: 'center'},
    { id: 'phone', label: 'Telefone', minWidth: 120, align: 'center'},
    { id: 'address', label: 'Endereço', minWidth: 220, align: 'center'},
    { id: 'cep', label: 'CEP', minWidth: 90, align: 'center'},
    { id: 'state', label: 'Estado', minWidth: 50, align: 'center'},
    { id: 'city', label: 'Cidade', minWidth: 120, align: 'center'},
    { id: 'department', label: 'Departamento', minWidth: 120, align: 'center'},
    { id: 'description', label: 'Observações', minWidth: 150, align: 'center'},
    { id: 'responsible', label: 'Responsavel', minWidth: 100, align: 'center',},
    { id: 'work', label: 'Obras', minWidth: 180, align: 'center',}
  ];

// Table Dashbord taag frontEnd

export const status = [
    {id: 1, name: 'Obras em andamentos', value: 0, color: 'red'},
    {id: 2, name: 'Vistorias', value: 0, color: 'blue' },
    {id: 3, name: 'Obras concluidas', value: 0, color: '#008000'},
]

