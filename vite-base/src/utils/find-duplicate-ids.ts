/* eslint-disable import/prefer-default-export */
import { Snapshot } from "@providers/drone.provider";

export const findDuplicateIds = (arr: Snapshot[]) => arr
      .filter((obj, index, self) => 
        self.findIndex(item => item.id === obj.id) !== index
      )
      .map(obj => obj.id)