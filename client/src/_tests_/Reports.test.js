test('renders without crashing', () => {
    render(<SaleReportList saleReports={[]} />);
  });
  
  test('displays a message when there are no sale reports', () => {
    const { getByText } = render(<SaleReportList saleReports={[]} />);
    const messageElement = getByText(/no sale reports/i);
    expect(messageElement).toBeInTheDocument();
  });
  
  test('displays each sale report in a list format', () => {
    const saleReports = [    { id: 1, amount: 100, date: '2022-04-10' },    { id: 2, amount: 200, date: '2022-04-11' },    { id: 3, amount: 300, date: '2022-04-12' }  ];
    const { getAllByRole } = render(<SaleReportList saleReports={saleReports} />);
    const listItemElements = getAllByRole('listitem');
    expect(listItemElements).toHaveLength(saleReports.length);
  });
  
  test('formats the sale report amount and date correctly', () => {
    const saleReports = [    { id: 1, amount: 100, date: '2022-04-10' }  ];
    const { getByText } = render(<SaleReportList saleReports={saleReports} />);
    const amountElement = getByText(/100\.00/i);
    const dateElement = getByText(/april 10, 2022/i);
    expect(amountElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
  
  test('handles errors when the sale report list is undefined or null', () => {
    const { getByText } = render(<SaleReportList />);
    const errorElement = getByText(/something went wrong/i);
    expect(errorElement).toBeInTheDocument();
  });
  