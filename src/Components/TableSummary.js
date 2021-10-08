import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import MSI from './MSI';



const TableSummary = ({data, comments}) => {

   

    return (
        <Table variant="simple" className="text-center table_report">
            <TableCaption>{comments}</TableCaption>
            <TableCaption></TableCaption>
            {
                data.length>0 ? (
                <>
                    <Thead className="text-center">
                <Tr>
                    <Th isNumeric>Id Servicio</Th>
                    <Th>Producto</Th>
                    <Th>Cliente</Th>
                    <Th >Unidad</Th>
                    <Th >Estatus</Th>
                    <Th >Ultimo evento</Th>
                    <Th >Fecha evento</Th>
                    {
                        data[0].Days_Missing && <Th >Dias desaparecido</Th> 
                    }
                </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((client,i) => (<MSI id={i+1} customer={client.H_Conectivity_Customer} unit={client.H_Conectivity_Alias_3_Alias} id_service={client.H_Conectivity_Id_Service} product={client.H_Conectivity_Alias_1_Product} status={client.H_Conectivity_Alias_2_Status} last_event={client.H_Conectivity_Event} last_event_date={client.H_Conectivity_Event_Date} ds={client.Days_Missing ? client.Days_Missing: false} />))
                    }                                                                                                                                        
                
                </Tbody>
                <Tfoot>
                    
                </Tfoot>
            </>
                ) : 
                <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            }
        </Table>
    )
}

export default TableSummary;
