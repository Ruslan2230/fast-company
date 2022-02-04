import React from "react";
import propTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelected, selectedItem }) => {
    const isArray = Array.isArray(items);
    const listItems = isArray ? items : Object.keys(items);

    console.log("selectedItem", selectedItem);
    return (<ul className="list-group">
        {listItems.map(item =>
            <li
                key = { isArray ? item._id : items[item][valueProperty]}
                className={"list-group-item" + ((isArray ? item.name : items[item]) === selectedItem ? " active" : "")}
                onClick={() => {
                    onItemSelected(isArray ? item.name : items[item].name);
                }
                }
                role='button'
            >
                {
                    isArray ? item.name : items[item][contentProperty]
                }
            </li>)
        }

    </ul>);
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: propTypes.oneOfType([propTypes.object, propTypes.array]),
    valueProperty: propTypes.string.isRequired,
    contentProperty: propTypes.string.isRequired,
    onItemSelected: propTypes.func,
    selectedItem: propTypes.object
};

export default GroupList;
