import { Box, Image, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

function Card(){
    return (
        <Box border="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to="#/">
                <Image src="https://i.picsum.photos/id/520/200/300.jpg?grayscale&hmac=JaJwi5i1XuU_nwqd8jBbaBAFnmcxThF4iwPe8-2YtQk"
                alt="product" />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        12/07/2021
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        Mackbook Pro
                    </Box>
                    <Box>100 TL</Box>
                </Box>
            </Link>
            <Button colorScheme="pink">Add to Basket</Button>
        </Box>
    )
}

export default Card;