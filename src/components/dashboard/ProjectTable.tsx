import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";



export default function ProjectTables(props:any){
  
  let allData = props.cdata
  console.log(allData)
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Resultado da Pesquisa</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Visão Geral
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            
            <tbody>
              {allData.map((tdata:any) => (
                <tr  className="border-top">
                  
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.logomarca}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.nome}</h6>
                        <span className="text-muted">{tdata.cnpj}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};


