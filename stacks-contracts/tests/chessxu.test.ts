import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet_1 = accounts.get("wallet_1")!;
const wallet_2 = accounts.get("wallet_2")!;
const wallet_3 = accounts.get("wallet_3")!;

describe("chessxu - create-game", () => {
    it("successfully creates a STX-wagered game", () => {
        const { result } = simnet.callPublicFn("chessxu", "create-game", [Cl.uint(100), Cl.bool(true)], wallet_1);
        expect(result).toBeOk(Cl.uint(1));
    });
});


