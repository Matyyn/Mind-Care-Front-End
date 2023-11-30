import React, { useState } from 'react';
import PostTab from './PostTab';
import ImageTab from './ImageTab';
import ForumGuideline from '../ForumGuideline';
import PersonalNavigator from '../PersonalNavigator';
import Navbar from '../Navbar';
import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

function Tabss() {
  const [activeTab, setActiveTab] = useState('Post Tab');
  const handlePostTab = () => {
    setActiveTab('Post Tab');
  };



  return (
    <Box className="forum">
      <Navbar />
      {/* <ForumGuideline /> */}
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab
            className={activeTab === 'Post Tab' ? 'active' : ''}
            onClick={handlePostTab}
          >
            Post
          </Tab>          
        </TabList>
        <TabPanels>
          <TabPanel>{activeTab === 'Post Tab' && <PostTab />}</TabPanel>          
        </TabPanels>
      </Tabs>
      {/* <PersonalNavigator /> */}
    </Box>
  );
}

export default Tabss;
