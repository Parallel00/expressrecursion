

def simplify(s):
     if type(s) == int:
        return s

    s = [simplify(s) for s in s]
    if type(s[0]) == int and s[0] == s[1] == s[2] == s[3]:
        return s[0]

    else:
        return s


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print "\n*** ALL TESTS PASS; YOU MADE THAT SEEM SIMPLE!!\n"
