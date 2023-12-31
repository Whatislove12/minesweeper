import { getRandom } from "../../store/utils/getRandom"

export const mineSweeperReducer = (state, action) => {
    switch (
        action.type

    ) {
        case 'START-GAME': {
            const newBombs = getRandom()
            return {...state, color:[], score:0, bomb:newBombs}
        }

        case 'RESET': {
            const newBombs = getRandom()
            return {...state, color:[], score:0, bomb:newBombs}
        }

        case 'PLAY-AGAIN': {
            const newBombs = getRandom() 
            return {color:[], score:0, check:!state.check, bomb:newBombs}
        }
        case 'CHANGE-COLOR': {
            let color = state.color
            let score = state.score
            let check = state.check

            if(!state.bomb.includes(action.payload)) {
                color=[...color, action.payload]
                if(!state.color.includes(action.payload)){
                    score++;
                }
            }
            else {
                check=!check
            }
            return {...state, color, score, check}
        }

        default: return state
    }

} 