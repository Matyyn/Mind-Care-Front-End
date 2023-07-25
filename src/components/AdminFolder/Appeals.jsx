import React from "react";
//import colors from "../Colors";
import Table from "./AppealsTable";
import LineGraph from "./MonthlyGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import {
    Box, Grid, GridItem,    
    Text,    
} from "@chakra-ui/react";
const anxietyTestData = [
    { id: 1, title: "Anxiety Test Score", totalScore: 31 },
    { id: 2, title: "Anxiety Test Score", totalScore: 31 },
    { id: 3, title: "Anxiety Test Score", totalScore: 31 },
    { id: 4, title: "Anxiety Test Score", totalScore: 31 },
    { id: 5, title: "Anxiety Test Score", totalScore: 31 },
  ];
function DashboardBody() {
    return (
        <>
            <Box p={[2, 4, 4]} marginLeft={['0%', '3%', '3%']} width={['100%', 'auto', 'auto']}>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(7, 1fr)']} gap={2} width={'100%'} padding={0}>
                {anxietyTestData.map((data)=>(
                        <GridItem
                        width={['100%', '15vw', '15vw']}
                        height={"auto"}
                        padding={3}
                        boxShadow={'lg'}
                        borderRadius={"10"}
                    >
                        <Text textAlign={"left"} fontWeight={"bolder"}>
                            {" "}
                            {data.title}
                        </Text>
                        <Text textAlign={"left"} fontWeight={"600"}>
                            {" "}
                            Total Score: {data.totalScore}
                        </Text>
                    </GridItem>
                    ))}
                </Grid>
                <Grid templateColumns="repeat(1, 1fr)" >
                    <GridItem>
                        <Table />
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
export default DashboardBody;
