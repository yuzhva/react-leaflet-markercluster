import {
  BasicExample,
  EventListeners,
  MarkerClusterOptions,
  MarkerOptions,
  MarkerPopup,
  MarkerTooltip,
} from "./examples";

export default {
  title: "React Leaflet MarkerCluster",
};

export const BasicExampleStory = {
  render: BasicExample,
  name: "Basic example",
};

export const EventListenersStory = {
  render: EventListeners,
  name: "Event listeners",
};

export const ClusterCustomIconStory = {
  render: MarkerClusterOptions,
  name: "Cluster custom icon",
};

export const MarkerIconAndTitleStory = {
  render: MarkerOptions,
  name: "Marker icon and title",
};

export const MarkerPopupStory = {
  render: MarkerPopup,
  name: "Marker popup",
};

export const MarkerTooltipStory = {
  render: MarkerTooltip,
  name: "Marker tooltip",
};
