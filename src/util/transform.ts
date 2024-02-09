import { IType } from "./dataModel";

export function addPer(value: string) {
    return `${value}vw`
}

export const filterArrayFromArray =
    (_1: IType[], _2: IType[]): IType[] => {
        _1.forEach(a => {
            _2.forEach(b => {
                if (b._id === a._id) {
                    _1 = _1.filter(x => x._id !== b._id)
                }
            });
        });
        console.log('111111111', _1)
        return _1
    }


    // data  always pass
    // _data