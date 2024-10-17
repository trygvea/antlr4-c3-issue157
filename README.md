# Expose bug in antlr4-c3

Re. antlr4-c3 bug: https://github.com/mike-lischke/antlr4-c3/issues/157

## To reproduce

1. Run `yarn clean-install && yarn test`. The test should pass.
2. Run `rm -rf yarn.lock`, and then `yarn clean-install && yarn test` again. The test should fail (a compile error).

## Explanation: 

See the `git diff` between old and newly generated yarn.lock.
Also use `grep "antlr4ng" yarn.lock -A 3` to see all usages of antlr4ng.  

Initially, antrl4ng@3.0.4 is used by both the generator and antlr4ng-c3.
When rebuilding the dependencies, the bug is exposed.

>The generator and antlr4ng-c3 uses different, incompatible versions of antrl4ng. 

I expect this will eventually happen to everyone using antlr4ng-c3 after the release of antrl4ng > 3.0.4. 
