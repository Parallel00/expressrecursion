def dump(s):
    if s == 0 or s == 1:
        print s
    else:
        for t in s:
            dump(t)

if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print "\n*** ALL TESTS PASS; NICE JOB!\n"
