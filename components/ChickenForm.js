import React, { Component } from "react";
import { Divider, Form, Grid, Segment } from "semantic-ui-react";

const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
];

class ChickenForm extends Component {
    state = {};

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { value } = this.state;
        return (
            <Segment>
                <Grid columns={2}>
                    <Grid.Column>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    label="First name"
                                    placeholder="First name"
                                />
                                <Form.Input
                                    fluid
                                    label="Last name"
                                    placeholder="Last name"
                                />
                                <Form.Select
                                    fluid
                                    label="Gender"
                                    options={options}
                                    placeholder="Gender"
                                />
                            </Form.Group>
                            <Form.Group inline>
                                <label>Size</label>
                                <Form.Radio
                                    label="Small"
                                    value="sm"
                                    checked={value === "sm"}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="Medium"
                                    value="md"
                                    checked={value === "md"}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="Large"
                                    value="lg"
                                    checked={value === "lg"}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.TextArea
                                label="About"
                                placeholder="Tell us more about you..."
                            />
                            <Form.Input
                                label="Image link (optional)"
                                placeholder="Eg: https://picsum.photos/200/300"
                            ></Form.Input>

                            <Form.Button color="teal">Submit</Form.Button>
                        </Form>
                    </Grid.Column>
                    dsds
                    <Grid.Column></Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
        );
    }
}

export default ChickenForm;
