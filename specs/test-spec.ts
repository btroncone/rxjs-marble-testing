declare var describe, it, expect, hot, cold, expectObservable, expectSubscriptions, beforeEach;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

describe('first spec', () => {
    it('should work', () => {
        const source = Observable.from<number>([1,2,3,4,5]);
        const example = source.filter(num => num % 2 === 0);
        const values = {a: 2, b: 4};
        const expected = '(ab|)';

        expectObservable(example).toBe(expected, values);
    });
});