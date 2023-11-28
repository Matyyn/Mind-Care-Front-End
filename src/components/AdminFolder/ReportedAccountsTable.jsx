import React, { useState, useEffect } from "react";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
  Button,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";

const ClientTable = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({});
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameFilterChange = (value) => {
    setNameFilter(value);
  };

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };
  const filteredData = data
    .filter((account) =>
      nameFilter ? account.name.includes(nameFilter) : true
    )
    .filter((account) =>
      statusFilter ? status[account._id] === statusFilter : true
    )
    .filter((account) =>
      searchTerm
        ? account.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );

  useEffect(() => {
    async function getReportedAccounts() {
      try {
        const response = await axios.get(
          "https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/admin/get-reported-accounts"
        );
        console.log(response.data);
        const { clientAccounts, therapistAccount } = response.data;

        const combinedData = [
          ...clientAccounts.map((account) => ({
            ...account,
            name: `${account.firstName} ${account.lastName}`,
          })),
          ...therapistAccount.map((account) => ({
            ...account,
            name: `${account.firstName} ${account.lastName}`,
          })),
        ];

        setData(combinedData);

        const initialStatus = {};
        combinedData.forEach((account) => {
          initialStatus[account._id] = account.isBlocked ? "Blocked" : "Active";
        });
        setStatus(initialStatus);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getReportedAccounts();
  }, []);

  const handleStatusChange = (accountId, value) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [accountId]: value,
    }));

    setData((prevData) =>
      prevData.map((account) =>
        account._id === accountId
          ? { ...account, isBlocked: value === "Blocked" }
          : account
      )
    );
  };

  const handleSave = (accountId) => {
    console.log("Saving data for account with ID:", accountId);
  };

  return (
    <div width="auto">
      <Stack style={{ flexDirection: "row" }} marginRight={"2%"}>
        <Text
          fontSize="md"
          style={{ fontWeight: "bold", marginLeft: "2%", marginTop: "1%" }}
        >
          Reported Accounts
        </Text>
        <Text
          fontSize="md"
          style={{
            fontWeight: "bold",
            marginLeft: "12%",
            marginRight: "1%",
            marginTop: "1%",
          }}
        >
          Filter By
        </Text>
        <Stack direction="row" spacing={4}>
          <Select
            width="45%"
            placeholder="Order"
            onChange={(e) => handleNameFilterChange(e.target.value)}
          >
            <option value="a">Ascending</option>
            <option value="b">Descending</option>
          </Select>

          <Select
            width="45%"
            placeholder="Status"
            onChange={(e) => handleStatusFilterChange(e.target.value)}
          >
            <option value="Blocked">Blocked</option>
            <option value="Active">Active</option>
          </Select>
        </Stack>
        <InputGroup
          size="md"
          width={"20%"}
          style={{ marginLeft: "auto", justifyContent: "flex-end" }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            focusBorderColor="blue.500"
            borderColor="gray.300"
            borderRadius="md"
            bg="white"
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
        </InputGroup>
      </Stack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">Name</Th>
            <Th textAlign="center">Email</Th>
            <Th textAlign="center">Reinstatement</Th>
            <Th textAlign="center">Violation</Th>
            <Th textAlign="center">Status</Th>
            <Th textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length === 0 ? (
            <Tr>
              <Td colSpan={6} textAlign="center">
                No reported accounts available
              </Td>
            </Tr>
          ) : (
            filteredData.map((account) => (
              <Tr key={account._id}>
                <Td textAlign="center">{account.name}</Td>
                <Td textAlign="center">{account.email}</Td>
                <Td textAlign="center">{account.reInstatement}</Td>
                <Td textAlign="center">{account.violation}</Td>
                <Td textAlign="center">
                  <Select
                    value={status[account._id] || ""}
                    onChange={(e) =>
                      handleStatusChange(account._id, e.target.value)
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                  </Select>
                </Td>
                <Td textAlign="center">
                  <Button
                    colorScheme="green"
                    size="sm"
                    onClick={() => handleSave(account._id)}
                  >
                    Save
                  </Button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default ClientTable;
