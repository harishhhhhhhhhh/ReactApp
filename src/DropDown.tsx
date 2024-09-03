import { RaulDropdown, RaulDropdownItem } from "@realpage/react-raul";

const DropDownExample = () => {
    const items = [
        {
            text: "Option 1",
            value: "option1",
        },
        {
            text: "Option 2",
            value: "option2",
        },
        {
            text: "Option 3",
            value: "option3",
        },
        {
            text: "Option 4",
            value: "option4",
        },
    ];

    return (
        <>
            <RaulDropdown
                label="Label Text"
                placeholderText="Select an option"
            >
                {items.map(({ text, value }) => (
                    <RaulDropdownItem
                        key={value}
                        text={text}
                        value={value}
                    />
                ))}
            </RaulDropdown>
        </>
    );
};
export { DropDownExample };
