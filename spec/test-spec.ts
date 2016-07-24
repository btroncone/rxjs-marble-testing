declare var describe, it, expect, hot, cold, expectObservable, expectSubscriptions, beforeEach;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

describe('The filter operator', () => {
    it('should correctly filter non-even numbers', () => {
        const source = Observable.from<number>([1,2,3,4,5]);
        const example = source.filter(num => num % 2 === 0);
        const values = {a: 2, b: 4};
        const expected = '(ab|)';

        expectObservable(example).toBe(expected, values);
    });

    it('should catch an error', () => {
        const source = Observable.throw('This is an error!');
        //gracefully handle error, returning observable with error message
        const example = source.catch(val => Observable.of(`I caught: ${val}`));
        //output: 'I caught: This is an error'
        const expected = '(a|)'

        expectObservable(example).toBe(expected, {a : 'I caught: This is an error!'});
    });
});