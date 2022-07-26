import React, { FC, VFC } from "react";
type ListType = {
    list: Array<string>;
};

const List: FC<ListType> = (props) => {
    const { list = [] } = props;
    if (!list.length) return null;

    return (
        <ul>
            {list.map((el) => (
                <li key={el}>{el}</li>
            ))}
        </ul>
    );
};

export { List };
