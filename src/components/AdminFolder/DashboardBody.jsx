import React from "react";
//import colors from "../Colors";
import Table from "./Table";
import LineGraph from "./MonthlyGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import {
    Box, Grid, GridItem, Tag,
    Flex,
    Center,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    IconButton, HStack,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    StackDivider,
    Stack,
    Collapse,
    Icon,
    Link,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Img,
} from "@chakra-ui/react";
import SideBar from "../Sidebar";
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
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
                    gap={[7, 7, 4, 2, 2]}>
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
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(4, 1fr)']}
                    gap={[4, 4, 4, 1]}
                    style={{ marginTop: '3%', marginBottom: '3%' }}
                >
                    <GridItem>
                        <LineGraph />
                    </GridItem>
                    <GridItem>
                        <PieGraph />
                    </GridItem>
                    <GridItem>
                        <PieGraph />
                    </GridItem>
                </Grid>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)']} >
                    <GridItem>
                        <Table />
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
export default DashboardBody;
