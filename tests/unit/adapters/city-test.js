import { module, test } from 'qunit';
import { setupTest } from 'cast/tests/helpers';

module('Unit | Adapter | city', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:city');
    assert.ok(adapter);
  });
});
