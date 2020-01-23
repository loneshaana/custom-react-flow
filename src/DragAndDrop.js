import * as React from "react";
import styled from "styled-components";
import { FlowChart } from "@mrblenny/react-flow-chart";
import { Content, Page, Sidebar, SidebarItem } from "./components";
import { chartSimple } from "./exampleChartState";
import CustomPort from "./CustomPort";

import * as actions from "./actions";
import mapValues from "./utils/mapValues";

import Select from "react-select";

const Message = styled.div`
  margin: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.05);
`;

/**
 * id:-> AutoGenerated
 * type -> DropDown of input / output
 * properties -> MultiSelect
 */
const NODE_TYPE_OPTIONS = [
  { label: "output", value: "OUTPUT" },
  { label: "input", value: "INPUT" }
];
const AddPortsToSelectedItem = ({ selected, onChange }) => {
  if (!selected || !selected.id) return "";
  return (
    <React.Fragment>
      <Message>Add Ports To Selected Item</Message>
      <div style={{ marginLeft: "1rem", marginRight: "0.5rem" }}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name="portType"
          options={NODE_TYPE_OPTIONS}
          onChange={option => onChange(option.value, selected.id)}
        />
      </div>
    </React.Fragment>
  );
};
export class DragAndDropSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...chartSimple };
    this.config = {};
    this.stateActions = mapValues(actions, func => (...args) =>
      this.setState(func(...args))
    );
  }
  onPortSelect(choosenPort, nodeId) {}

  render() {
    const { selected } = this.state;
    return (
      <Page>
        <Content>
          <FlowChart
            chart={this.state}
            callbacks={this.stateActions}
            config={this.config}
            Components={{
              Port: CustomPort
            }}
          />
        </Content>
        <Sidebar>
          <Message>Drag and drop these items onto the canvas.</Message>
          <SidebarItem
            type="top/bottom"
            ports={{
              port1: {
                id: "port1",
                type: "top",
                properties: {
                  custom: "property"
                }
              },
              port2: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property"
                }
              }
            }}
            properties={{
              custom: "property"
            }}
          />
          <SidebarItem
            type="bottom-only"
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property"
                }
              }
            }}
          />
          <SidebarItem
            type="left-right"
            ports={{
              port1: {
                id: "port1",
                type: "left",
                properties: {
                  custom: "property"
                }
              },
              port2: {
                id: "port2",
                type: "right",
                properties: {
                  custom: "property"
                }
              }
            }}
          />
          <SidebarItem
            type="all-sides"
            ports={{
              port1: {
                id: "port1",
                type: "left"
              },
              port2: {
                id: "port2",
                type: "right"
              },
              port3: {
                id: "port3",
                type: "top"
              },
              port4: {
                id: "port4",
                type: "bottom"
              }
            }}
          />
          <SidebarItem
            type="lots-of-ports"
            ports={{
              port1: {
                id: "port1",
                type: "left"
              },
              port2: {
                id: "port2",
                type: "right"
              },
              port3: {
                id: "port3",
                type: "top"
              },
              port4: {
                id: "port4",
                type: "bottom"
              },
              port5: {
                id: "port5",
                type: "left"
              },
              port6: {
                id: "port6",
                type: "right"
              },
              port7: {
                id: "port7",
                type: "top"
              },
              port8: {
                id: "port8",
                type: "bottom"
              },
              port9: {
                id: "port9",
                type: "left"
              },
              port10: {
                id: "port10",
                type: "right"
              },
              port11: {
                id: "port11",
                type: "top"
              },
              port12: {
                id: "port12",
                type: "bottom"
              }
            }}
          />
          <AddPortsToSelectedItem
            selected={selected}
            onChange={this.onPortSelect}
          />
        </Sidebar>
      </Page>
    );
  }
}