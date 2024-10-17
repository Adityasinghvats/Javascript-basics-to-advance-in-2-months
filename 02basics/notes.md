
# Equality rules of JS
- == (Equality):
    Type Coercion: Converts the operands to the same type before making the comparison.
    Example: 5 == '5' is true because the string '5' is converted to the number 5.

- === (Strict Equality):
    No Type Coercion: Does not convert the operands; both value and type must be the same.
    Example: 5 === '5' is false because the types (number and string) are different.

    ---

# Equality rules for Kt

- ==:
    Content Equality: Checks if the values of the two operands are equal. For non-primitive types, it calls the equals() method.
    Example: "hello" == "hello" is true.

- ===:
    Referential Equality: Checks if the two operands refer to the same object instance.
    Example: a === b is true only if a and b refer to the same object in memory.

    ---