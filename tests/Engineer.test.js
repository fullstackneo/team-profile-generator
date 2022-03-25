const Engineer = require('../lib/Engineer');

test("To create an Engineer object", () => {
    const engineer = new Engineer("neo", 123, "neo@gmail.com", "github");
    expect(engineer.name).toBe("neo");
    expect(engineer.getName()).toBe("neo");    
    expect(engineer.id).toBe(123);
    expect(engineer.getId()).toBe(123);
    expect(engineer.email).toBe("neo@gmail.com");
    expect(engineer.getEmail()).toBe("neo@gmail.com");
    expect(engineer.github).toBe("github");
    expect(engineer.getGithub()).toBe("github");
    expect(engineer.getRole()).toBe("Engineer")
})