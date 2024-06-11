def validate(s):
    if type(s) == int:
        return s == 0 or s == 1

    if type(s) != list or len(s) != 4:
        return False

    for r in s:
        if not validate(r):
            return False

    return True

if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print "\n*** ALL TESTS PASS; THAT'S SUPER-VALID WORK!\n"
