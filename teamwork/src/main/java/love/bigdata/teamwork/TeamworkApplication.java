package love.bigdata.teamwork;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

//@SpringBootApplication
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
//@SpringBootApplication
//@EnableMongoRepositories(basePackages = "com.github.eljah.saylaw.mongo")
//@EnableJpaRepositories(basePackages =  "com.github.eljah.saylaw.repository")
public class TeamworkApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeamworkApplication.class, args);
	}

}
