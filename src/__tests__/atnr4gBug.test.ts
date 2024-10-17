import {CharStream, CommonTokenStream} from "antlr4ng";
import {ExprLexer} from "../../generated/ExprLexer";
import {ExprParser} from "../../generated/ExprParser";
import {CodeCompletionCore} from "antlr4-c3";

test("antrl4ng bug", () => {
  const chars = CharStream.fromString("foo = bar");
  const lexer = new ExprLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new ExprParser(tokens);

  const core = new CodeCompletionCore(parser);
  expect(core).not.toBe(undefined)
});
