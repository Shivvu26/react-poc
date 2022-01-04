import "@testing-library/jest-dom";
import * as React from "react";
import {render, fireEvent, screen} from '@testing-library/react';

import Header from "../components/Header";

test('Testing Header component', () => {
    const testMessage = 'Test Message'
    render(<Header>{testMessage}</Header>)

    expect(screen.queryByText(testMessage)).toBeNull()

})
