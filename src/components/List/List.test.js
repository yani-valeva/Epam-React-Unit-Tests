import React from 'react';
import { mount, shallow } from "enzyme";
import List from './List';

describe("<List />", () => {
    describe("snapshots", () => {
        test("what is visible with default props", () => {
            expect(shallow(<List items={[]} />).contains(<div> No items found.</div>)).toBe(true);
        });
        test("what is visible with no props", () => {
            expect(shallow(<List />).contains(<div> No items found.</div>)).toBe(true);
        });
        test("what is visible", () => {
            const mockedItems = {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            };

            const wrapper = mount(<List items={mockedItems} />);
            expect(wrapper.find(".listItem__title").length === 1).toBe(true);
        });
    });
});