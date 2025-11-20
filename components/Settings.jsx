import React, { useState } from 'react';
import { Box, H2, Text, Button, Input, Label, FormGroup, Card, Flex } from '@adminjs/design-system';

const Settings = (props) => {
  const { settings } = props;
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [editKey, setEditKey] = useState('');
  const [editValue, setEditValue] = useState('');

  const handleAdd = () => {
    if (newKey && newValue) {
      // This would be handled by the handler, but for UI, we can simulate
        alert(`Adding new setting: ${newKey} = ${newValue}`);
      setNewKey('');
      setNewValue('');
    }
  };

  const handleEdit = (key, value) => {
    setEditKey(key);
    setEditValue(value);
  };

  const handleUpdate = () => {
    if (editKey && editValue) {
        alert(`Updating setting: ${editKey} = ${editValue}`);
      setEditKey('');
      setEditValue('');
    }
  };

  return (
    <Box variant="grey" p="xl">
      <H2 mb="lg">Settings Management</H2>

      <Card as="div" p="lg" bg="white" shadow="sm" mb="lg">
        <H2 fontSize="md" mb="md">Add New Setting</H2>
        <Flex gap="md" alignItems="flex-end">
          <FormGroup>
            <Label>Key</Label>
            <Input value={newKey} onChange={(e) => setNewKey(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Value</Label>
            <Input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
          </FormGroup>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Flex>
      </Card>

      <Card as="div" p="lg" bg="white" shadow="sm">
        <H2 fontSize="md" mb="md">Existing Settings</H2>
        {settings && settings.length > 0 ? (
          settings.map((setting) => (
            <Box key={setting.key} p="md" border="1px solid #e0e0e0" borderRadius="md" mb="sm">
              {editKey === setting.key ? (
                <Flex gap="md" alignItems="flex-end">
                  <FormGroup>
                    <Label>Key</Label>
                    <Input value={editKey} onChange={(e) => setEditKey(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Value</Label>
                    <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                  </FormGroup>
                  <Button variant="primary" onClick={handleUpdate}>Update</Button>
                  <Button variant="secondary" onClick={() => { setEditKey(''); setEditValue(''); }}>Cancel</Button>
                </Flex>
              ) : (
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Text fontWeight="bold">{setting.key}</Text>
                    <Text color="grey60">{setting.value}</Text>
                  </Box>
                  <Button variant="secondary" onClick={() => handleEdit(setting.key, setting.value)}>Edit</Button>
                </Flex>
              )}
            </Box>
          ))
        ) : (
          <Text>No settings found.</Text>
        )}
      </Card>
    </Box>
  );
};

export default Settings;