import React, { useState } from "react";
import { Container, VStack, HStack, Input, Text, RadioGroup, Radio, Button, IconButton, Box, FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import Header from "../components/Header";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [medicines, setMedicines] = useState([{ name: "", dosage: "morning", food: "before", days: 1, totalTablets: 1 }]);

  const handleAddMedicine = () => {
    setMedicines([...medicines, { name: "", dosage: "morning", food: "before", days: 1, totalTablets: 1 }]);
  };

  const handleRemoveMedicine = (index) => {
    const newMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(newMedicines);
  };

  const handleMedicineChange = (index, field, value) => {
    const newMedicines = medicines.map((medicine, i) => (i === index ? { ...medicine, [field]: value } : medicine));
    setMedicines(newMedicines);
  };

  const handleDaysChange = (index, value) => {
    const newMedicines = medicines.map((medicine, i) => (i === index ? { ...medicine, days: value, totalTablets: value * 3 } : medicine));
    setMedicines(newMedicines);
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <Header />
      <VStack spacing={4} width="100%" mt={4}>
        <FormControl>
          <FormLabel>Patient Name</FormLabel>
          <Input value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Enter patient name" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter phone number" />
        </FormControl>
        {medicines.map((medicine, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" width="100%">
            <VStack spacing={4} align="start">
              <FormControl>
                <FormLabel>Medicine Name</FormLabel>
                <Input value={medicine.name} onChange={(e) => handleMedicineChange(index, "name", e.target.value)} placeholder="Enter medicine name" />
              </FormControl>
              <FormControl>
                <FormLabel>Dosage</FormLabel>
                <RadioGroup value={medicine.dosage} onChange={(value) => handleMedicineChange(index, "dosage", value)}>
                  <HStack spacing={4}>
                    <Radio value="morning">Morning</Radio>
                    <Radio value="afternoon">Afternoon</Radio>
                    <Radio value="night">Night</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Before/After Food</FormLabel>
                <RadioGroup value={medicine.food} onChange={(value) => handleMedicineChange(index, "food", value)}>
                  <HStack spacing={4}>
                    <Radio value="before">Before Food</Radio>
                    <Radio value="after">After Food</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Duration (Days)</FormLabel>
                <NumberInput min={1} value={medicine.days} onChange={(valueString) => handleDaysChange(index, parseInt(valueString))}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Text>Total Tablets: {medicine.totalTablets}</Text>
              <IconButton aria-label="Remove" icon={<FaTrash />} onClick={() => handleRemoveMedicine(index)} />
            </VStack>
          </Box>
        ))}
        <Button leftIcon={<FaPlus />} onClick={handleAddMedicine}>
          Add Medicine
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
