import { Grid } from "@chakra-ui/react";
import Card from '../../components/Card'

function Products() {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <Card w='100%' h='10' bg='blue.500' />
            <Card w='100%' h='10' bg='blue.500' />
            <Card w='100%' h='10' bg='blue.500' />
            <Card w='100%' h='10' bg='blue.500' />
            <Card w='100%' h='10' bg='blue.500' />
        </Grid>
    )
}

export default Products
