import React from 'react'
import {
    Tr,
    Td
  } from "@chakra-ui/react"

const MSI = ({product,customer, unit,status, id_service, last_event, last_event_date, ds=false}) => {
    return (
        <Tr className="text-table font-mon">
            <Td>{id_service}</Td>
            <Td>{product}</Td>
            <Td >{customer}</Td>
            <Td >{unit}</Td>
            <Td >{(status)? status : "Sin Status Registrado"}</Td>
            <Td >{last_event}</Td>
            <Td >{last_event_date}</Td>
            {
                ds && <Td >{ds}</Td>
            }
        </Tr>
    )
}

export default MSI
