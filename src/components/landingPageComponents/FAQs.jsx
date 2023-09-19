import React, { useState } from "react";
//import { css } from "@emotion/react";
import colors from "../Colors";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Divider,
} from "@chakra-ui/react";
function FAQs() {
  return (
    <>
    <div className="parentDiv">
      <div
        className="columns"
        style={{width:'auto',marginTop:'5%',marginBottom:'5%'}}>
      <Text
        fontSize="44"
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          marginTop: "5%",
          marginBottom: "3%",
          color: colors.secondary,          
        }}
      >
        Frequently Asked Questions
      </Text>
      {/* <p
        style={{
          textAlign: "center",
          marginRight: "20%",
          marginLeft: "20%",
          marginTop: "2%",
          marginBottom:"2%",
          fontSize:'17px',
          fontWeight:'600'
        }}
      >
        Mind Care FAQ:provide answers to common questions about mental health
        services provided by Mind Care.
      </p> */}
      <Accordion
        style={{ marginRight: "25%", marginLeft: "25%",marginBottom:'2%', color: colors.secondary }}>
        <AccordionItem >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                Q1: What is Mind Care?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          "Mind Care" is an innovative project designed to detect anxiety and depression early on, leveraging advanced AI algorithms to analyze user behavior and emotional cues. Through continuous monitoring and personalized interventions, our solution aims to promote mental well-being and provide timely support to those in need, fostering a healthier and happier society. Join us in the journey towards a more emotionally resilient world with Mind Care.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                Q2: Who can benefit from Mind Care's services?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Mind Care services offer valuable support to individuals dealing with anxiety and depression, as well as providing useful tools for mental health professionals to monitor and treat their clients. Employers can also benefit by fostering a healthier work environment through Mind Care services for their employees.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                Q3: What types of therapy does Mind Care offer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Cognitive-Behavioral Therapy (CBT) aims to change negative thought patterns and behaviors to alleviate anxiety and depression. Talk therapy provides a supportive environment for individuals to discuss emotions and foster self-reflection. Mindfulness-Based Therapy cultivates present-moment awareness, reducing stress and enhancing mental well-being.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                Q4: How do I schedule an appointment with Mind Care?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          To schedule an appointment with Mind Care, simply download the Mind Care mobile app and follow the user-friendly interface to book appointments conveniently from your smartphone.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                Q5: How much does therapy cost at Mind Care?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          The cost of therapy at Mind Care can vary depending on the therapist's qualifications and experience. Rates for therapy sessions are typically based on a sliding scale, with therapists charging different fees to accommodate various budgets. It's advisable to check the app for specific pricing details and therapist profiles.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
     </div>
    </div>
    <Divider/>
    </>
  );
}

export default FAQs;
