def add(s1, s2):
    if type(s1) == type(s2) == int:
        return s1 | s2

    if type(s1) == int:
        s1 = [s1, s1, s1, s1]

    if type(s2) == int:
        s2 = [s2, s2, s2, s2]

    return [add(ss1, ss2) for ss1, ss2 in zip(s1, s2)]

if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print "\n*** ALL TESTS PASS; YOU'RE A RECURSION WIZARD!\n"
