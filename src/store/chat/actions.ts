import { createStandardAction } from "typesafe-actions";

export const addMessage = createStandardAction("@Chat/ADD_MESSAGE")<string>();
