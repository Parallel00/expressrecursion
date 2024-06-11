
def make_board(board_string):

    letters = board_string.split()

    board = [
        letters[0:5],
        letters[5:10],
        letters[10:15],
        letters[15:20],
        letters[20:25],
    ]

    return board

def wordFind(board, word, a, b, found):
    if board[a][b] != word[0]:
        print("%-6s%d,%d  %-3s%-8s%-30s" % ("NO", a, b, board[a][b], word,
                                            found))
        return False
    if (a, b) in found:
        print("%-6s%d,%d  %-3s%-8s%-30s" % ("found", a, b, board[a][b], word,
                                            found))
        return False
    if len(word) == 1:
        print("%-6s%d,%d  %-3s%-8s%-30s" % ("WIN", a, b, board[a][b], word,
                                            found))
        return True

    print("%-6s%d,%d  %-3s%-8s%-30s" % ("OK", a, b, board[a][b], word, found))
    found = found | {(a, b)}

    if a > 0:
        if find_from(board, word[1:], a - 1, b, found):
            return True

    if a < 4:
        if find_from(board, word[1:], a + 1, b, found):
            return True

    if b > 0:
        if find_from(board, word[1:], a, b - 1, found):
            return True

    if b < 4:
        if find_from(board, word[1:], a, b + 1, found):
            return True

    return False

def find(board, word):
    for a in range(0, 5):
        for b in range(0, 5):
            if find_from(board, word, a, b, found=set()):
                return True


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED; YOU FOUND SUCCESS! ***\n")
