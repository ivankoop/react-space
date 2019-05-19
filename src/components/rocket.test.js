/**
 * @author Ivan Koop
 * @email ivankoop3@gmail.com
 * @create date 2019-05-17 17:57:57
 * @modify date 2019-05-17 17:57:57

 */
import React from "react";
import {mount, shallow} from "enzyme";
import Rocket from "./Rocket";

function setup(isMount) {
    const props = {
        xPos: 300,
        speed: 10,
    };

    var enzymeWrapper = shallow(<Rocket {...props} />);

    if (isMount) {
        enzymeWrapper = mount(<Rocket {...props} />);
    }

    return {
        props,
        enzymeWrapper,
    };
}

describe("Rocket", () => {
    it("should render Rocket and check props", () => {
        const {enzymeWrapper} = setup(true);
        const props = enzymeWrapper.props();

        expect(props.xPos).toEqual(300);
        expect(props.speed).toEqual(10);

        expect(enzymeWrapper.find(".rocket").exists()).toEqual(true);
    });

    it("should handle handleLaunch", () => {
        const {enzymeWrapper} = setup(false);

        const instance = enzymeWrapper.instance();
        const spy = jest.spyOn(instance, "handleLaunch");

        instance.forceUpdate();

        const rocket = enzymeWrapper.find(".rocket");

        rocket.props().onClick();

        expect(spy).toHaveBeenCalled();
    });
});
