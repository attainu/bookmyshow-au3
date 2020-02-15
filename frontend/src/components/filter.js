import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default  function LanguageFilter () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Language
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >English</DropdownItem>
        <DropdownItem >Hindi</DropdownItem>
        <DropdownItem>Punjabi</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

