import { Grid } from "@chakra-ui/react";
import Card from '../../components/Card'
import { useQuery } from "react-query"

function Products() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log("data", data);
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
