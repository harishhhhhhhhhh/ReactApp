import { useState } from 'react'
import { RaulAccordion, RaulAccordionItem, RaulAccordionItemHeader, RaulAccordionItemPanel, RaulAccordionItemTitle, RaulButton } from '@realpage/react-raul'
import { DropDownExample } from './DropDown'

function App() {

  return (
    <>
      <DropDownExample></DropDownExample>
      <div>Accordion</div>
      <RaulButton variant="primary">
        Primary Button
      </RaulButton>
      <RaulAccordion>
        <RaulAccordionItem name="simple-accordion-1">
          <RaulAccordionItemHeader>
            <RaulAccordionItemTitle>Accordion 1 Title</RaulAccordionItemTitle>
            <div>Secondary Text</div>
          </RaulAccordionItemHeader>

          <RaulAccordionItemPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisi rhoncus, congue lacus eget, dictum erat. Fusce posuere nulla eget nisl ultricies varius. Vivamus non eros a dolor tristique imperdiet ac nec neque. Maecenas porta felis mi, eget rhoncus dolor dapibus in. Donec tincidunt pellentesque finibus.
          </RaulAccordionItemPanel>
        </RaulAccordionItem>

        <RaulAccordionItem name="simple-accordion-2">
          <RaulAccordionItemHeader>
            <RaulAccordionItemTitle>Accordion 2 Title</RaulAccordionItemTitle>
          </RaulAccordionItemHeader>

          <RaulAccordionItemPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisi rhoncus, congue lacus eget, dictum erat. Fusce posuere nulla eget nisl ultricies varius. Vivamus non eros a dolor tristique imperdiet ac nec neque. Maecenas porta felis mi, eget rhoncus dolor dapibus in. Donec tincidunt pellentesque finibus.
          </RaulAccordionItemPanel>
        </RaulAccordionItem>

        <RaulAccordionItem name="simple-accordion-3">
          <RaulAccordionItemHeader>
            <RaulAccordionItemTitle>Accordion 3 Title</RaulAccordionItemTitle>
            <div>Secondary Text</div>
          </RaulAccordionItemHeader>

          <RaulAccordionItemPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisi rhoncus, congue lacus eget, dictum erat. Fusce posuere nulla eget nisl ultricies varius. Vivamus non eros a dolor tristique imperdiet ac nec neque. Maecenas porta felis mi, eget rhoncus dolor dapibus in. Donec tincidunt pellentesque finibus.
          </RaulAccordionItemPanel>
        </RaulAccordionItem>

        <RaulAccordionItem name="simple-accordion-4">
          <RaulAccordionItemHeader>
            <RaulAccordionItemTitle>Accordion 4 Title</RaulAccordionItemTitle>
          </RaulAccordionItemHeader>

          <RaulAccordionItemPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisi rhoncus, congue lacus eget, dictum erat. Fusce posuere nulla eget nisl ultricies varius. Vivamus non eros a dolor tristique imperdiet ac nec neque. Maecenas porta felis mi, eget rhoncus dolor dapibus in. Donec tincidunt pellentesque finibus.
          </RaulAccordionItemPanel>
        </RaulAccordionItem>
      </RaulAccordion>
    </>
  )
}

export default App
